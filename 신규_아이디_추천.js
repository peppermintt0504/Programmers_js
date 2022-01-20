function solution(new_id) {
    var answer = '';
    var id = new_id.toLowerCase(new_id);
    var temp = '';
    for (var i = 0; i < id.length; i++) {
        if ('a' <= id[i] && id[i] <= 'z')
            temp += id[i];
        if ('0' <= id[i] && id[i] <= '9')
            temp += id[i];
        if (id[i] == '-' || id[i] == '_' || id[i] == '.')
            temp += id[i];
    }
    id = temp;
    temp = '';

    for (i = 0; i < id.length; i++) {
        if (id[i] == '.' && i != 0) {
            if (id[i - 1] == '.')
                continue;
            temp += id[i];
        } else
            temp += id[i];
    }
    id = temp;
    temp = '';
    if (id[0] == '.')
        id = id.substring(1)
    if (id == '')
        id = 'a'
    if (id.length > 15)
        id = id.substr(0, 15)

    if (id[(id.length) - 1] == '.')
        id = id.substr(0, id.length - 1)

    if (id.length <= 2) {
        while (id.length < 3)
            id += id[(id.length) - 1]
    }

    return id;
}