import preferences from '@ohos.data.preferences'

class PreferencesUtil {

  public prefMap: Map<string, preferences.Preferences> = new Map()

  async loadPreference(context, name: string) {
    try {
      let pref = await preferences.getPreferences(context, name)
      this.prefMap.set(name, pref)
      console.log('testTag', `加载Preferences[${name}]成功`)
    }catch (exception) {
      console.log('testTag', `加载Preferences[${name}]失败`, JSON.stringify(exception))
    }
  }
  async putPreferenceValue(name: string, key: string, value: preferences.ValueType) {
    if(!this.prefMap.has(name)) {
      console.log('testTaf', `Preferences[${name}]尚未初始化`)
      return
    }
    try {
      const pref = this.prefMap.get(name)
      await pref.put(key, value)
      await pref.flush()
      console.log('testTag', `保存Preferences[${name}:${key}=${value}]成功`)
    }catch (e) {
      console.log('testTag', `保存Preferences[${name}:${key}=${value}]失败`, JSON.stringify(e))
    }
  }

  async putPreference(name: string, key: string, value: string) {
    if(!this.prefMap.has(name)) {
      console.log('testTaf', `Preferences[${name}]尚未初始化`)
      return
    }
    try {
      const pref = this.prefMap.get(name)
      await pref.put(key, value)
      await pref.flush()
      console.log('testTag', `保存Preferences[${name}:${key}=${value}]成功`)
    }catch (e) {
      console.log('testTag', `保存Preferences[${name}:${key}=${value}]失败`, JSON.stringify(e))
    }
  }
  async getPreferenceValue(name: string, key: string) {
    if(!this.prefMap.has(name)) {
      console.log('testTaf', `Preferences[${name}]尚未初始化`)
      return
    }
    try {
      const pref = this.prefMap.get(name)
      const value = await pref.get(key, null)
      console.log('testTag', `读取Preferences[${name}:${key}=${value}]成功`)
      return value
    }catch (e) {
      console.log('testTag', `保存Preferences[${name}:${key}]失败`, JSON.stringify(e))
    }
  }
}

const preferencesUtil = new PreferencesUtil()

export default preferencesUtil as PreferencesUtil