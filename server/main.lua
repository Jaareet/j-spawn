local function formatLicense(input)
    if input and input:match('steam') then
        return input
    end
    local startIndex, endIndex = string.find(input, ':')
    return (startIndex and endIndex) and string.sub(input, endIndex + 1) or input
end
local function getPlayerIdentifier(source)
    local identifiers = GetPlayerIdentifiers(source)
    local identifier = nil
    for _, v in pairs(identifiers) do
        if string.match(v, GetConvar('spawn:license', 'license')) then
            identifier = formatLicense(v)
        end
    end
    return identifier
end
local function getPlayerInfo(source)
    local xPlayer = ESX.GetPlayerFromId(source)
    local identifier = getPlayerIdentifier(source)
    local info = MySQL.query.await(
        'SELECT firstname, lastname, sex, dateofbirth, job, job_grade FROM users WHERE identifier = ?', {
            identifier
        })[1]
    if info then
        local job = MySQL.query.await('SELECT * FROM jobs WHERE name = ?', { info.job })[1]
        local job_grade = MySQL.query.await('SELECT * FROM job_grades WHERE job_name = ? AND grade = ?', {
            info.job,
            info.job_grade
        })[1]
        info.job_label = job.label
        info.job_grade_label = job_grade.label
    end
    return info or {}
end

local function showSelector(data)
    local source = tonumber(source)
    local message = GetConvar('spawn:kickMessage',
        'You have been kicked for a suspicious activity.\n\nTried to execute an event by %s')
    if not data.resource then return end
    DropPlayer(source, message:format(data.resource))
end

lib.callback.register('j-spawn:getPlayerInfo', getPlayerInfo)
RegisterNetEvent('j-spawn:showSelector', showSelector)
