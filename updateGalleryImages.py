import os
from io import BytesIO
from pathlib import Path
from typing import List
import pyperclip
import requests
from PIL import Image
from pprint import pprint

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

    for photoName in sorted(filterHiddenFiles(os.listdir(galleryPath)), reverse=True):
        photo = Image.open(galleryPath/photoName)
        w, h = photo.size
        galleries[galleryName].append({
            'src': f'img/gallery/{galleryName}/{photoName}',
            'width': w,
            'height': h
        })

# This part outputs the galllery to the GalleryImages.ts
with open(ROOT_DIR/'src'/'GalleryImages.ts', 'w', encoding='utf8') as f:
    for gName, imgs in galleries.items():
        f.write(f'export const {gName} = [\n')
        for img in imgs:
            f.write(
                f'\t{{ src: "{img["src"]}", width: {img["width"]}, height: {img["height"]} }},\n'
            )
        f.write(']\n\n')
