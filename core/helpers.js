module.exports = {

  registerGlobal(value, branch, key) {

    if (!global['prometheus']) global['prometheus'] = {}
    if (!global[branch]) global[branch] = {}
    global[branch][key] = value

  }

}