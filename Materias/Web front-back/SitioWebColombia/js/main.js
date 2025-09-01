'use strict';

//Función asíncrona para obtener y mostrar los departamentos de Colombia

async function obtenerYMostrarDepartamentos() {
    const API_URL = 'https://api-colombia.com/api/v1/Department';
    const contenedorDepartamentos = document.getElementById('departamentos-lista');
    const mensajeCarga = document.getElementById('loading-message');

    try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status} ${respuesta.statusText}`);
        }
        const departamentos = await respuesta.json();

        // Ocultar mensaje de carga
        mensajeCarga.style.display = 'none';
        contenedorDepartamentos.innerHTML = '';

        // Ordenar departamentos por población de mayor a menor
        departamentos.sort((a, b) => b.population - a.population);

        departamentos.forEach((departamento, index) => {
            const departamentoCard = document.createElement('div');
            departamentoCard.className = 'departamento-card';
            
            // Crear contenido de la tarjeta
            departamentoCard.innerHTML = `
                <div class="departamento-nombre">${departamento.name}</div>
                <div class="departamento-poblacion">
                    Población: <span class="numero">${departamento.population.toLocaleString('es-CO')}</span> habitantes
                </div>
                <div class="departamento-info">
                    ${getInfoAdicional(departamento.name)}
                </div>
            `;
            
            // Agregar animación de entrada escalonada
            departamentoCard.style.animation = `fadeInUp 0.6s ease forwards`;
            departamentoCard.style.animationDelay = `${index * 0.05}s`;
            departamentoCard.style.opacity = '0';
            
            contenedorDepartamentos.appendChild(departamentoCard);
        });

        // Agregar animación CSS para la entrada de tarjetas
        if (!document.querySelector('#departamentos-animation-styles')) {
            const style = document.createElement('style');
            style.id = 'departamentos-animation-styles';
            style.textContent = `
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `;
            document.head.appendChild(style);
        }

    } catch (error) {
        console.error('Falló la obtención de datos:', error);
        mensajeCarga.innerHTML = `
            <div style="color: #EF3340; text-align: center;">
                <h3>❌ Error al cargar los datos</h3>
                <p>No se pudieron cargar los datos de los departamentos.</p>
                <p>Por favor, verifique su conexión a internet e intente más tarde.</p>
                <button onclick="location.reload()" style="
                    background-color: #005BBB; 
                    color: white; 
                    border: none; 
                    padding: 10px 20px; 
                    border-radius: 5px; 
                    cursor: pointer; 
                    margin-top: 10px;
                ">Intentar nuevamente</button>
            </div>
        `;
    }
}

// Función para agregar información adicional sobre cada departamento
function getInfoAdicional(nombreDepartamento) {
    const info = {
        'Antioquia': 'Capital: Medellín - Región paisa y minera',
        'Bogotá D.C.': 'Distrito Capital - Centro político y económico',
        'Valle del Cauca': 'Capital: Cali - Región del Pacífico',
        'Cundinamarca': 'Capital: Bogotá - Región central',
        'Atlántico': 'Capital: Barranquilla - Región Caribe',
        'Santander': 'Capital: Bucaramanga - Región montañosa',
        'Bolívar': 'Capital: Cartagena - Costa Caribe',
        'Córdoba': 'Capital: Montería - Región ganadera',
        'Tolima': 'Capital: Ibagué - Región agrícola',
        'Norte de Santander': 'Capital: Cúcuta - Frontera con Venezuela',
        'Cauca': 'Capital: Popayán - Ciudad Blanca',
        'Magdalena': 'Capital: Santa Marta - Costa Caribe',
        'Huila': 'Capital: Neiva - Región surcolombiana',
        'La Guajira': 'Capital: Riohacha - Península de La Guajira',
        'Meta': 'Capital: Villavicencio - Llanos Orientales',
        'Cesar': 'Capital: Valledupar - Cuna del vallenato',
        'Nariño': 'Capital: Pasto - Frontera con Ecuador',
        'Boyacá': 'Capital: Tunja - Región boyacense',
        'Risaralda': 'Capital: Pereira - Eje Cafetero',
        'Sucre': 'Capital: Sincelejo - Sabanas costeñas',
        'Caldas': 'Capital: Manizales - Eje Cafetero',
        'Quindío': 'Capital: Armenia - Corazón del Eje Cafetero',
        'Casanare': 'Capital: Yopal - Llanos Orientales',
        'Chocó': 'Capital: Quibdó - Región del Pacífico',
        'Caquetá': 'Capital: Florencia - Amazonía colombiana',
        'Putumayo': 'Capital: Mocoa - Región amazónica',
        'Arauca': 'Capital: Arauca - Llanos Orientales',
        'Amazonas': 'Capital: Leticia - Corazón de la Amazonía',
        'San Andrés y Providencia': 'Capital: San Andrés - Islas del Caribe',
        'Guainía': 'Capital: Inírida - Selva amazónica',
        'Guaviare': 'Capital: San José del Guaviare - Región de transición',
        'Vaupés': 'Capital: Mitú - Territorio indígena amazónico',
        'Vichada': 'Capital: Puerto Carreño - Llanos Orientales'
    };
    
    return info[nombreDepartamento] || 'Hermoso departamento colombiano';
}

document.addEventListener('DOMContentLoaded', obtenerYMostrarDepartamentos);
