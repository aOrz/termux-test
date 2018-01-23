const api = require('termux')

if (!api.hasTermux) process.exit(1)

api.vibrate()
   .duration(1000)
   .run()
api.toast('test toast')
api.dialog('test dialog')
api.notification('notification')