import './main.css'

interface SimplyFadeOptions {
    attributeSelector?: string
    offsetPx?: number
    transitionDuration?: number
    movementPx?: number
}

export class SimplyFade {
    private animatedElements: Array<HTMLElement>

    constructor(options?: SimplyFadeOptions) {
        options = options || {}

        var attributeSelector = options.attributeSelector || 'simply-fade'
        var offsetPx = options.offsetPx || 200
        var transitionDuration = options.transitionDuration || 0.5
        var movementPx = options.movementPx || 50

        this.animatedElements = Array.from(document.querySelectorAll(`*[${attributeSelector}]`))

        if (!this.animatedElements.length) return

        for (var i = 0; i < this.animatedElements.length; i++) {
            var elem = this.animatedElements[i] as HTMLElement
            var direction = elem.getAttribute(attributeSelector) || 'fade'

            this.applyDirectionalStyles(elem, direction, movementPx)

            if (this.isValidTransitionNumber(transitionDuration)) {
                elem.style.transition = `${transitionDuration}s all ease-out`
            } else {
                elem.style.transition = '.5s all ease-out'
                console.warn('SimplyFade: Invalid transition duration provided. Defaulting to .5s')
            }
        }

        const handleScroll = () => {
            for (var i = 0; i < this.animatedElements.length; i++) {
                var elem = this.animatedElements[i] as HTMLElement
            }

            for (var i = 0; i < this.animatedElements.length; i++) {
                var elem = this.animatedElements[i] as HTMLElement
                if (this.isElemVisible(elem, offsetPx)) {
                    elem.style.opacity = '1'
                    elem.style.transform = 'scale(1)'
                    this.animatedElements.splice(i, 1)
                }
            }
        }

        handleScroll()
        document.addEventListener('scroll', handleScroll)
    }

    private isElemVisible(el: HTMLElement, offsetPx: number) {
        var rect = el.getBoundingClientRect()
        var elemTop = rect.top + offsetPx
        var elemBottom = rect.bottom
        return elemTop < window.innerHeight && elemBottom >= 0
    }

    private applyDirectionalStyles(el: HTMLElement, direction: string, movementPx: number) {
        el.style.opacity = '0'

        switch (direction) {
            case 'up':
                el.style.transform = `translateY(${movementPx}px)`
                break
            case 'down':
                el.style.transform = `translateY(-${movementPx}px)`
                break
            case 'left':
                el.style.transform = `translateX(${movementPx}px)`
                break
            case 'right':
                el.style.transform = `translateX(-${movementPx}px)`
                break
            case 'fade':
                el.style.transform = `scale(1)`
                break
            default:
                console.warn('SimplyFade: Invalid direction provided')
                break
        }
    }

    private isValidTransitionNumber(n: number) {
        return (n - 0) * (n - 1) <= 0
    }
}
