local showSpawn = true

CreateThread(function()
    ShutdownLoadingScreenNui()
    SetNuiFocus(true, true)
    CreateThread(function()
        while (showSpawn) do
            DoScreenFadeOut(1000)
            Wait(0)
        end
    end)
end)

local function exitFromSpawn()
    local resource = GetInvokingResource()
    if resource and resource ~= cache.resource then
        TriggerServerEvent('j-spawn:showSelector', { resource = resource })
    end
    ShutdownLoadingScreenNui()
    TriggerServerEvent('esx:onPlayerJoined')
    showSpawn = false
    SendNUIMessage({
        action = 'hide'
    })
    SetNuiFocus(false, false)
    DoScreenFadeIn(1000)
end

local function getPlayerInfo()
    local resource = GetInvokingResource()
    if resource and resource ~= cache.resource then
        TriggerServerEvent('j-spawn:showSelector', { resource = resource })
    end
    local playerData = lib.callback.await('j-spawn:getPlayerInfo', false)
    SendNUIMessage({
        action = 'show:info',
        name = playerData.firstname,
        lastname = playerData.lastname,
        job = playerData.job_label,
        job_grade = playerData.job_grade_label,
        date = playerData.dateofbirth,
        sex = playerData.sex
    })
end

RegisterNUICallback('info', getPlayerInfo)
RegisterNUICallback('salir', exitFromSpawn)
