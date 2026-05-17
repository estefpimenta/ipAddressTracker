import './InfoPanel.css';

function InfoPanel() {


    return(
        <section className='info-panel'>

            <div className="info-item">
                <h2>IP ADRESS</h2>
                <p>192.212.174.101</p>
            </div>

            <div className="info-item">
                <h2>LOCALIZAÇÃO</h2>
                <p>San Francisco, CA 94107</p>
            </div>

            <div className="info-item">
                <h2>TIMEZONE</h2>
                <p>-08:00</p>
            </div>

            <div className="info-item">
                <h2>ISP</h2>
                <p>Comcast Cable Communications, LLC</p>
            </div>

        </section>
    )

}


export default InfoPanel