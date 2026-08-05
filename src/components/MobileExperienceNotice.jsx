import { useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-mobile-notice-dismissed'
const MOBILE_MAX_WIDTH = 767

export default function MobileExperienceNotice() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const isMobile = window.innerWidth <= MOBILE_MAX_WIDTH
        const dismissed = sessionStorage.getItem(STORAGE_KEY) === '1'

        if (isMobile && !dismissed) {
            setVisible(true)
        }

        const onResize = () => {
            if (window.innerWidth > MOBILE_MAX_WIDTH) {
                setVisible(false)
            }
        }

        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    const handleDismiss = () => {
        sessionStorage.setItem(STORAGE_KEY, '1')
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div className="mobile-notice-overlay" role="dialog" aria-modal="true" aria-labelledby="mobile-notice-title">
            <div className="mobile-notice-card">
                <p id="mobile-notice-title" className="mobile-notice-text">
                    Open on a laptop or a device bigger than 768px for the full experience.
                </p>
                <button type="button" className="mobile-notice-btn" onClick={handleDismiss}>
                    Okay
                </button>
            </div>
        </div>
    )
}
