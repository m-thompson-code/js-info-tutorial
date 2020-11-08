/**
 * Improve socket.io before this script
 * <script src="/socket.io/socket.io.js"></script>
 * 
 */

// source: https://socket.io/get-started/chat#Broadcasting
const socket = io();

socket.on('live-refresh', (event) => {
    console.log(" ~ Live Refresh . . .");
    document.location.reload();
});
