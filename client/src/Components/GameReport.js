import '../Components/GameReport.css';
import topChampIcon from '../src/Assets/aatrox.png';
import flashIcon from '../src/Assets/flash.png';
import infinityEdgeIcon from '../src/Assets/infinity_edge.png';

// Assuming your CSS is properly imported in the above line, you can use the imported variables in your code.


function GameReport() {
  return (
    <div className="container">
      <div className='blue-info'>
        <div className='blue-result'>
          Victory
        </div>

        <div className='roles'>
          Role
        </div>

        <div className='kdas'>
          KDA
        </div>

        <div className='dmgs'>
          Damage
        </div>

        <div className='golds'>
          Gold
        </div>

        <div className='css'>
          CS
        </div>

        <div className='wards'>
          Wards
        </div>

        <div className='champItems'>
          Items
        </div>
      </div>
      
      <div className='blue'>
        <div className='champ'>
          <img src={topChampIcon} alt="" />
        </div>

        <div className='spells'>
          <div className='spell'>
            <img src={flashIcon} alt="" />
          </div>

          <div className='spell'>
            <img src={infinityEdgeIcon} alt="" />
          </div>
        </div>

        <div className='name'>
          Bread
        </div>

        <div className='role'>
          Top
        </div>

        <div className='kda'>
          0/10/0
        </div>

        <div className='dmg'>
          1009
        </div>

        <div className='gold'>
          10000
        </div>

        <div className='cs'>
          100
        </div>

        <div className='ward'>
          20
        </div>

        <div className='items'>
          <div className='item'>
            <img src={infinity_edge_icon} alt="" />
          </div>
          
          <div className='item'>
            <img src={infinity_edge_icon} alt="" />
          </div>

          <div className='item'>
            <img src={infinity_edge_icon} alt="" />
          </div>

          <div className='item'>
            <img src={infinity_edge_icon} alt="" />
          </div>
          
          <div className='item'>
            <img src={infinity_edge_icon} alt="" />
          </div>
            
          <div className='item'>
            <img src={infinity_edge_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameReport;
