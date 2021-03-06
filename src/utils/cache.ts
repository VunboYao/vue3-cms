class LocalCache {
  setCache(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string): any {
    // todo: 返回值不能是unknown,否则无法赋值
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache(): void {
    window.localStorage.clear()
  }
}

export default new LocalCache()
