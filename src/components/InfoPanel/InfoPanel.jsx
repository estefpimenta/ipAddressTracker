import './InfoPanel.css';

function InfoPanel({ ipData }) {


    return(
        <section className='info-panel'>

            <div className="info-item">
                <h2>IP ADRESS</h2>
                <p>{ipData.ip}</p>
            </div>

            <div className="info-item">
                <h2>LOCALIZAÇÃO</h2>
                <p>{ipData.location.city}, {ipData.location.region}</p>
            </div>

            <div className="info-item">
                <h2>TIMEZONE</h2>
                <p>{ipData.location.timezone}</p>
            </div>

            <div className="info-item">
                <h2>ISP</h2>
                <p>{ipData.isp}</p>
            </div>

        </section>
    )

}


export default InfoPanel