import { Menu } from 'electron';

export const mainMenu = () => {
    const isMac = process.platform === 'darwin'
    
    const template = [
        {
            label: "Inicio",
            submenu: [
                { role: 'reload' },
                { type: 'separator' },
                isMac ? { role: 'close' } : { role: 'quit' }
            ]
        }
    ]
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}

