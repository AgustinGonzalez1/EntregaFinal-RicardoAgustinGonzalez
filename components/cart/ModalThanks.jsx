import Button from '../products/Button';

const ModalThanks = ({ orderId, setModalPurchase, setOrderId }) => {
  return (
    <div
      className='fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center'
      onClick={() => setModalPurchase(false)}
    >
      <div
        className='bg-white p-6 rounded-lg z-50 w-80 flex flex-col '
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className='text-lg font-bold mb-4 text-center'>
          Gracias por tu compra
        </h2>
        <p className='text-gray-700 mb-4 font-bold text-center'>
          Tu pedido se ha realizado con éxito
        </p>

        {!orderId ? (
          <p className='text-gray-700 mb-4 font-bold text-center'>
            Por favor espere...
          </p>
        ) : (
          <p className='text-gray-700 mb-4 font-bold text-center'>
            El ID de tu pedido es: {orderId}
          </p>
        )}
        <div className='flex justify-center'>
          <Button
            function1={() => {
              setModalPurchase(false);
              setOrderId(null);
            }}
            text1='Continuar'
          />
        </div>
      </div>
    </div>
  );
};
export default ModalThanks;
