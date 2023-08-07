# [J DEVELOPMENT](https://jaareet.es/discord) · SPAWN

* Preview [Click Here](https://streamable.com/xpnt0j)

* Dependencies: 
    * [es_extended](https://github.com/esx-framework/esx_core/tree/main/%5Bcore%5D/es_extended)
    * [esx_identity](https://github.com/esx-framework/esx_core/tree/main/%5Bcore%5D/esx_identity)
    * [ox_lib](https://github.com/overextended/ox_lib/releases)
    * [oxmysql](https://github.com/overextended/oxmysql/releases)

* Features:
  * >Auto detect your character data, if you don't have a character, returns to the identification form Only compatible with (esx_identity and es_extended)

  * >Responsive Design

  * >0.0ms CPU usage

  * >News Tips && Shop Pages

  * >Preconfigured Spawn System (Read bellow to set it) 

* No incluyed:
  * >Multicharacter System
  * >Script Support 

# Getting Started

* Setting up
    * Go to es_extended
    * Go into client/main.lua file.
    * Search these lines:
 
    * > This is the default ESX config.
    * > You must to delete these lines
    ```lua
        CreateThread(function()
            while not Config.Multichar do
                Wait(100)

                if NetworkIsPlayerActive(PlayerId()) then
                    exports.spawnmanager:setAutoSpawn(false)
                    DoScreenFadeOut(0)
                    Wait(500)
                    TriggerServerEvent('esx:onPlayerJoined')
                    break
                end
            end
        end)
    ```

# LoadingScreen compatibility:

    The following configuration is not accepted in the loading screens to be used:

    (fxmanifest.lua) or (__resource.lua)

    loadscreen_manual_shutdown 'yes'

    If you have this setting, delete that line.

# server.cfg Configuration

```diff
setr spawn:kickMessage "You have been kicked for a suspicious activity.\n\nTried to execute an event by %s"

setr spawn:license "license" ## Or steam
```

<div align='center'>

## We hope you like and enjoy the script!

</div>