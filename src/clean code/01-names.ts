(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filestoevaluate = [
        { id: 1, flogged: false },
        { id: 2, flogged: false },
        { id: 3, flogged: true },
        { id: 4, flogged: false },
        { id: 5, flogged: false },
        { id: 7, flogged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filestodelete = filestoevaluate.map( f => f.flogged );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const fechaDeHoy = new Date();

    // días transcurridos - elapsed time in days
    const totalDias: number = 23;

    // número de archivos en un directorio - number of files in directory
    const numeroDeArchivos = 33;

    // primer nombre - first name
    const nombres = 'Fernando';

    // primer apellido - last name
    const apellidos = 'Herrera';

    // días desde la última modificación - days since modification
    const antiguedadModificacion = 12;

    // cantidad máxima de clases por estudiante - max classes per student
    const limiteClasesAlumno = 6;


})();