const ModalFinish = ({ onSubmit, register, errors, setModalFinish }) => {
  return (
    <div className='fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg z-50 w-80 flex flex-col'>
        <form action='' onSubmit={onSubmit} className='flex flex-col gap-2'>
          <input
            type='text'
            placeholder='Ingrese su Nombre'
            {...register('name', {
              required: 'El campo nombre es requerido',
            })}
            className='border-2 border-gray-700 py-1 px-1 w-full'
          />

          <p className='text-red-500 h-6'>{errors.name?.message}</p>

          <input
            type='email'
            placeholder='Ingrese su Email'
            {...register('email', {
              required: 'El campo email es requerido',
            })}
            className='border-2 border-gray-700 py-1 px-1 w-full'
          />

          <p className='text-red-500 h-6'>{errors.email?.message}</p>

          <div className='flex justify-between'>
            <button
              type='submit'
              className='bg-green-500 hover:bg-green-700 font-bold duration-300 ease-in-out text-white py-2 px-4 rounded-xl'
            >
              Finalizar
            </button>
            <button
              type='button'
              className='bg-red-500 hover:bg-red-700 font-bold duration-300 ease-in-out text-white py-2 px-4 rounded-xl'
              onClick={() => setModalFinish(false)}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ModalFinish;
