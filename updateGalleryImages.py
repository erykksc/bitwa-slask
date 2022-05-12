#!/usr/bin/env python3
import os
from dataclasses import dataclass
from pathlib import Path
from shutil import rmtree
from typing import Dict, List

from PIL import Image

THUMBNAIL_MAX_SIZE = (400, 400)
ROOT_DIR = Path(__file__).parent.absolute()
PUBLIC_DIR = ROOT_DIR/'public'


@dataclass
class IImage:
    original: Path
    thumbnail: Path | None
    width: int
    height: int


def filterHiddenItems(files: List[str]):
    return list(filter(lambda p: p[0] != '.', files))


galleriesDir: Path = PUBLIC_DIR/'img'/'gallery'

galleriesNames = filterHiddenItems(os.listdir(galleriesDir))

galleries: Dict[str, List[IImage]] = dict()

print('READING GALLERIES FILES')
for galleryName in galleriesNames:
    galleryPath = galleriesDir/galleryName
    galleries[galleryName] = list()

    sortedPhotoNames = sorted(filterHiddenItems(
        os.listdir(galleryPath)), reverse=True)

    for photoName in sortedPhotoNames:
        if (galleryPath/photoName).is_dir():
            continue

        print('Handling:', photoName)
        thumbnailPath = galleryPath/'thumbnails'/photoName

        photo = Image.open(galleryPath/photoName)
        photo.thumbnail(THUMBNAIL_MAX_SIZE)
        w, h = photo.size
        photo.save(thumbnailPath)

        galleries[galleryName].append(
            IImage(
                original=Path(f'img/gallery/{galleryName}/{photoName}'),
                thumbnail=Path(
                    f'img/gallery/{galleryName}/thumbnails/{photoName}'),
                width=w,
                height=h,
            )
        )

# # This part generates thumbnails and saves them to correct location
# print('GENERATING THUMBNAILS')
# for gName, imgs in galleries.items():
#     thumbnailDir: Path = galleriesDir/gName/'thumbnails'
#     rmtree(thumbnailDir, ignore_errors=True)
#     thumbnailDir.mkdir()
#     for img in imgs:
#         print('Generate thumbnail:', img.src)
#         thumb = Image.open(PUBLIC_DIR/img.src)
#         thumb.thumbnail(THUMBNAIL_MAX_SIZE)
#         thumb.save(thumbnailDir/img.src.name)

# This part outputs the galllery to the GalleryImages.ts
print('OUTPUTING TO GalleryImages.ts')
with open(ROOT_DIR/'src'/'GalleryImages.ts', 'w', encoding='utf8') as f:
    f.write(
        """\
interface MyImage {
    src: string,
    original: string,
    width: number,
    height: number
}
"""
    )
    f.write('export const galleries: Record<string, MyImage[]> = {\n')
    for gName, imgs in galleries.items():
        fixedGName = gName.capitalize().replace('_', ' ').replace('-', '.')
        f.write(f'\t"{fixedGName}": [\n')
        for img in imgs:
            f.write(
                f'\t\t{{ src: "{img.thumbnail}", original: "{img.original}", width: {img.width}, height: {img.height} }},\n'
            )
        f.write(f'\t],\n')
    f.write('}\n')
