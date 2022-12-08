#~/bin/bash
npm run build

if [ "$1" = "eryk.site" ] 
then
    dest="eryk.site:~/domains/eryk.site/public_html/bitwaoslask"
else
    dest="h1022714@94.152.11.197:~/public_html/bitwaoslask.pl/"
fi
rsync --progress --delete -ra ./build/ $dest
