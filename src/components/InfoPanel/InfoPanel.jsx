import './InfoPanel.css';
import loadindgIconBlack from '../../assets/icon-loading-black.png'



function renderValue(isLoading, value) {
  return isLoading ? (
    <img
      src={loadindgIconBlack}
      alt="Loading"
      className="info-loading-icon"
    />
  ) : (
    value
  )
 }

function InfoPanel({ ipData, isLoading, weatherData }) {


    return(
        <section className= "info-panel">

            <div className="info-item">
                <h2>IP ADRESS</h2>
                <p>{renderValue(isLoading, ipData.ip)}</p>
            </div>

            <div className="info-item">
                <h2>LOCALIZAÇÃO</h2>
                <p>{renderValue(isLoading, `${ipData.location.city}, ${ipData.location.region}`)}</p>
            </div>

            <div className="info-item">
                <h2>TIMEZONE</h2>
                <p>{renderValue(isLoading, ipData.location.timezone)}</p>
            </div>

            <div className="info-item">
                <h2>ISP</h2>
                <p>{renderValue(isLoading, ipData.isp)}</p>
            </div>

            <div className="info-item">
                <h2>TEMPERATURA</h2>
                <p>{renderValue(isLoading, weatherData ? `${weatherData.temperature}°C` : null)}</p>
            </div>

        </section>
    )

}


export default InfoPanel