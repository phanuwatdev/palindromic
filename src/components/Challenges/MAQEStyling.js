import React from 'react'

export default function MAQEStyling() {
    return (
        <div>
            <div style={{ backgroundColor: '#FDFEFE', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '700px', height: '700px', border: '15px #39bde3 solid', borderRadius: '30px', padding: '13px' }}>
                    <div style={{ background: 'linear-gradient(#39bde3, #a7fffe)', width: '100%', height: '100%', borderRadius: '15px', display: 'flex', flexDirection: 'column'}}>
                    
                        {/* <div style={{ backgroundColor: 'rgba(221, 254, 254, 0.2)', width: '50%', height: '50%', borderRadius: '6px', position: 'absolute', zIndex: '1' }}/> */}

                        <div style={{ width: '100%', height: '100%', padding: '60px', position: 'relative', zIndex: '1', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: '230px', height: '230px', background: 'red' }}>

                            </div>
                            <div style={{ width: '230px', height: '230px', background: 'yellow' }}>

                            </div>
                        </div>

                        <div style={{ width: '100%', height: '100%', padding: '50px', position: 'relative', zIndex: '1', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: '230px', height: '230px', background: 'green' }}>

                            </div>
                            <div style={{ width: '230px', height: '230px', background: 'blue' }}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
