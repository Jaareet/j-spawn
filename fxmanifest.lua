fx_version 'cerulean'
games { 'rdr3', 'gta5' }

author 'Javi && Jaareet'
description 'Spawn Script for J DEVELOPMENT'
version '1.0.0'
lua54 'on'
ui_page 'html/index.html'

-- What to run
files {
    'html/**/**/**/*.*',
}

shared_scripts {
    '@es_extended/imports.lua',
    '@ox_lib/init.lua',
}

client_scripts {
    'client/*.l*a',
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server/*.l*a',
}

dependencies {
    'es_extended',
    'esx_identity',
    'oxmysql',
    'ox_lib'
}
