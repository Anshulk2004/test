# test

after install run
    
    yarn

then
  
    yarn global add nodemon

after that run following command to test if the server is running
  
    npm run dev

to check if the database is working run
  
    nodemon ./database/data.js

It will result in an object in the terminal with rows field having current time. Similar to this

    Connected
    Result {
      command: 'SELECT',
      rowCount: 1,
      oid: null,
      rows: [ { now: 2023-11-05T06:38:37.196Z } ],
      fields: [
        Field {
          name: 'now',
          tableID: 0,
          columnID: 0,
          dataTypeID: 1184,
          dataTypeSize: 8,
          dataTypeModifier: -1,
          format: 'text'
        }
      ],
      _parsers: [ [Function: parseDate] ],
      _types: TypeOverrides {
        _types: {
          getTypeParser: [Function: getTypeParser],
          setTypeParser: [Function: setTypeParser],
          arrayParser: [Object],
          builtins: [Object]
        },
        text: {},
        binary: {}
      },
      RowCtor: null,
      rowAsArray: false,
      _prebuiltEmptyResultObject: { now: null }
    }
