#!/usr/bin/python


# copy = open(".css", )


from shutil import copy2

copy2('css/main.css', 'css/light.css' )

import fileinput
for line in fileinput.FileInput("css/light.css",inplace=1):
    if '222222' in line:
        print line.replace('222222', 'ffd700')
    elif 'ffd700' in line:
        print line.replace('ffd700', '222222')
    else:
        print line


