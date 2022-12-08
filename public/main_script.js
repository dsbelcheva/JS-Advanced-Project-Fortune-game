const socket = io('http://localhost:3000')
const roomContainer = document.getElementById('room-container')
const notificationContainer = document.getElementById('notification-container')
const notificationInput = document.getElementById('notification-input') 
const postForm = document.getElementById('post-container')

if (postForm != null) {
  const user_name = prompt('What is your name?')
  appendMessage('You joined successfully')
  socket.emit('new-user', roomName, user_name )

  postForm.addEventListener('submit', eventt => {
    eventt.preventDefault()
    const message = notificationInput.value
    appendMessage('You:' + message)
    socket.emit('share-current-horoscope', roomName, message)
    notificationInput.value=''
  } )
}

socket.on('room-created', room => {
  const roomElement = document.createElement('div')
  roomElement.innerText = room
  const roomLink = document.createElement('a')
  roomLink.href = `/${room}`
  roomLink.innerText = 'join'
  roomContainer.append(roomElement)
  roomContainer.append(roomLink)
})

socket.on('user-horoscope', data => {
  appendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', name => {
  appendMessage(`${name} connected`)
})

socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`)
})

function appendMessage (message) {
  const messageEl = document.createElement('div')
  messageEl.innerText = message
  notificationContainer.append(messageEl)
}
