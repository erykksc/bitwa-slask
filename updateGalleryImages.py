#!/usr/bin/env python3
import os
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Union
import unicodedata

from PIL import Image

THUMBNAIL_MAX_SIZE = (1000, 1000)
ROOT_DIR = Path(__file__).parent.absolute()
PUBLIC_DIR = ROOT_DIR/'public'


@dataclass
class IImage:
    original: Path
    thumbnail: Union[Path, None]
    width: int
    height: int


@dataclass
class Gallery:
    name: str
    date: str
    city: str
    path: Path
    images: List[IImage]


def filterHiddenItems(files: List[str]):
    return list(filter(lambda p: p[0] != '.', files))


galleriesDir: Path = PUBLIC_DIR/'img'/'gallery'

galleriesNames = filterHiddenItems(os.listdir(galleriesDir))

galleriesNames = sorted(galleriesNames, reverse=True)

galleries: List[Gallery] = list()
for gName in galleriesNames:
    # create gallery object
    date, cityName = gName.split('_', 1)
    # galleriesNames = list(map(lambda x: unicodedata.normalize('NFC', x),galleriesNames))
    fCityName = unicodedata.normalize('NFC',cityName.replace('_', ' '))
    # Format date from "YYYY-MM-DD" to "DD.MM.YYYY"
    fDate = '.'.join(reversed(date.split('-')))
    galleries.append(Gallery(name=gName, city=fCityName,
                     date=fDate, images=list(), path=galleriesDir/gName))


print('READING GALLERIES FILES')
for gallery in galleries:
    sortedPhotoNames = sorted(filterHiddenItems(
        os.listdir(gallery.path)), reverse=True)

    for photoName in sortedPhotoNames:
        if (gallery.path/photoName).is_dir():
            continue

        print(f'Gallery: {gallery.name}, handling:', photoName)
        # Create thumbnail
        thumbnailPath = gallery.path/'thumbnails'/photoName
        thumbnailPath.parent.mkdir(exist_ok=True)
        # remove old thumbnail if exists
        if thumbnailPath.exists():
            thumbnailPath.unlink()
        photo = Image.open(gallery.path/photoName)
        photo.thumbnail(THUMBNAIL_MAX_SIZE)
        w, h = photo.size
        photo.save(thumbnailPath)

        gallery.images.append(
            IImage(
                original=Path(f'img/gallery/{gallery.name}/{photoName}'),
                thumbnail=Path(
                    f'img/gallery/{gallery.name}/thumbnails/{photoName}'),
                width=w,
                height=h,
            )
        )

# This part outputs the galllery to the GalleryImages.ts
print('OUTPUTING TO GalleryImages.ts')
with open(ROOT_DIR/'src'/'GalleryImages.ts', 'w', encoding='utf8') as f:
    f.write(
        """\
// This file is generated automatically by updateGalleryImages.py, do not change it manually

interface MyImage {
    src: string,
    original: string,
    width: number,
    height: number
}
"""
    )
    f.write('export const galleries: Record<string, MyImage[]> = {\n')
    for gallery in galleries:
        f.write(f'\t"{gallery.city} {gallery.date}": [\n')
        for img in gallery.images:
            f.write(
                f'\t\t{{ src: "{img.thumbnail}", original: "{img.original}", width: {img.width}, height: {img.height} }},\n'
            )
        f.write(f'\t],\n')
    f.write('}\n')
