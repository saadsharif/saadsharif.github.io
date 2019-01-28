#!/usr/bin/python

from shutil import copy2
import fileinput


# make a copy of main css stylesheet
copy2('css/main.css', 'css/light.css' )

# go through copy file and swap the colour scheme around
for line in fileinput.FileInput("css/light.css",inplace=1):
    if '222222' in line:
        print line.replace('222222', 'ffd700')
    elif 'ffd700' in line:
        print line.replace('ffd700', '222222')
    else:
        print line


