#!/usr/bin/env python3
import os
from pathlib import Path
from typing import List

from PIL import Image

ROOT_DIR = Path(__file__).parent.absolute()

'img/gallery'


def filterHiddenFiles(files: List[str]):
    return list(filter(lambda p: p[0] != '.', files))


input('Executing this file will update src/GalleryImages.ts file, press enter to continue...')


galleriesDir = ROOT_DIR/'public'/'img'/'gallery'

galleriesNames = filterHiddenFiles(os.listdir(galleriesDir))

galleries = dict()

for galleryName in galleriesNames:
    galleryPath = galleriesDir/galleryName
    galleries[galleryName] = list()

    sortedPhotoNames = sorted(filterHiddenFiles(
        os.listdir(galleryPath)), reverse=True)

    for photoName in sortedPhotoNames:
        photo = Image.open(galleryPath/photoName)
        w, h = photo.size
        galleries[galleryName].append({
            'src': f'img/gallery/{galleryName}/{photoName}',
            'width': w,
            'height': h
        })

# This part outputs the galllery to the GalleryImages.ts
with open(ROOT_DIR/'src'/'GalleryImages.ts', 'w', encoding='utf8') as f:
    f.write('export const galleries = {\n')
    for gName, imgs in galleries.items():
        fixedGName = gName.capitalize().replace('_', ' ').replace('-', '.')
        f.write(f'\t"{fixedGName}": [\n')
        for img in imgs:
            f.write(
                f'\t\t{{ src: "{img["src"]}", width: {img["width"]}, height: {img["height"]} }},\n'
            )
        f.write(f'\t],\n')
    f.write('}\n')
