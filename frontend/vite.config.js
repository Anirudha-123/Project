// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({


 
//   server:{

//     proxy:{
//       '/api':'http://localhost:8000',
//     }
  
//     },
  


//   plugins: [react()],
  
 
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:8000',
    }
  },
  build: {
    outDir: 'dist'  // <-- Add this to ensure the build output is in the correct folder
  },
  plugins: [react()],
})

