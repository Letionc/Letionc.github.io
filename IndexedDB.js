class IndexedDBUtils {
  /**
   * @param {string} dbName
   * @param {number} version
   */
  constructor(dbName, version) {
    /**@type {string}*/
    this.dbName = dbName;
    /**@type {number}*/
    this.version = version;
    /**@type {IDBDatabase | null}*/
    this.db = null;
  }

  /**
   * 打开数据库连接
   * @param {string} storeName 
   * @param {string} keyPath A-Za-z0-9_
   * @param {Array<{[keyPath: string]: string, [k: string]: any}> | undefined} indexes Array of data.
   * @returns {Promise<IDBDatabase>}
   */
  async openDB(storeName, keyPath, indexes = []) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(storeName)) {
          const store = db.createObjectStore(storeName, { keyPath });
          indexes.forEach(index => {
            store.createIndex(index.name, index.keyPath, index.options);
          });
        }
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onerror = (event) => {
        reject(`IndexedDB error: ${event.target.error}`);
      };
    });
  }

  /**
   * 创建/添加数据
   * @param {string} storeName 
   * @param {{[keyPath: string]: string, [k: string]: any}} data 
   * @returns {Promise<"Data added successfully">}
   */
  async create(storeName,data) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.add(data);

      request.onsuccess = () => resolve('Data added successfully');
      request.onerror = (event) => reject(`Error adding data: ${event.target.error}`);
    });
  }

  /**
   * 删除数据
   * @param {string} storeName 
   * @param {string} key 
   * @returns {Promise<"Data deleted successfully">}
   */
  async delete(storeName, key) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.delete(key);

      request.onsuccess = () => resolve('Data deleted successfully');
      request.onerror = (event) => reject(`Error deleting data: ${event.target.error}`);
    });
  }

  /**
   * 查找数据
   * @param {string} storeName 
   * @param {string} key 
   * @returns {Promise<{[keyPath: string]: string, [k: string]: any}>}
   */
  async find(storeName, key) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.get(key);

      request.onsuccess = () => resolve(request.result);
      request.onerror = (event) => reject(`Error finding data: ${event.target.error}`);
    });
  }

  /**
   * 获取所有数据
   * @param {string} storeName 
   * @returns {Promise<Array<{[keyPath: string]: string, [k: string]: any}>>}
   */
  async getAll(storeName) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = (event) => reject(`Error getting all data: ${event.target.error}`);
    });
  }

  /**
   * 
   * @param {string} storeName 
   * @param {{[keyPath: string]: string, [k: string]: any}} data 
   * @returns {Promise<"Data updated successfully">}
   */
  async update(storeName, data) {
    if (!this.db) throw new Error('Database not initialized');
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.put(data);

      request.onsuccess = () => resolve('Data updated successfully');
      request.onerror = (event) => reject(`Failed to update: ${event.target.error}`);
    });
  }
}