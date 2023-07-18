#~/bin/bash
npm run build

dest="eryk.site:~/domains/bitwaoslaskboxing.pl/public_html/"
echo "Deploying to $dest"
rsync --human-readable --info=progress2 --delete -ra ./build/ $dest
