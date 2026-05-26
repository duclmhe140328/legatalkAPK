
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker đăng ký thành công!');
        })
        .catch(err => {
          console.log('Service Worker đăng ký thất bại: ', err);
        });
    });
  }
</script>
