
export const DBConfig = {
  name: "UserFlowDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "user",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "username", keypath: "username", options: { unique: false } },
        { name: "email", keypath: "email", options: { unique: true } },
        { name: "password", keypath: "password", options: { unique: false } },
        { name: "isBlocked", keypath: "isBlocked", options: { unique: false } },
        { name: "lastLogin", keypath: "lastLogin", options: { unique: false } },
      ],
    },
  ],
};

 