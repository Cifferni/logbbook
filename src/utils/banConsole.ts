// 禁止打开控制台
export function banConsole() {
    if (import.meta.env.MODE === 'production') {
        if (
            window.outerHeight - window.innerHeight > 200 ||
            window.outerWidth - window.innerWidth > 200
        ) {
            document.body.innerHTML =
            '请不要随便查看别人代码'
        }
        setInterval(() => {
            (function () {
                return false
            }
            // eslint-disable-next-line no-unexpected-multiline
                ['constructor']('debugger')
            // eslint-disable-next-line no-unexpected-multiline
                ['call']())
        }, 50)
    }
}
