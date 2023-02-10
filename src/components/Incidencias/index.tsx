import IncidenciaNumber from './IncidenciaNumber';
import IncidenciasItem from './IncidenciasItem';

import styles from './styles.module.scss';

function Incidencias() {
    return (
        <div className={styles.container}>
            <div>
                <IncidenciaNumber />
            </div>
            <div>
                <IncidenciasItem />
            </div>
        </div>
    );
}

export default Incidencias;
