const ExtrasOverlay = () => (
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center">
        {/* La imagen ocupa toda la pantalla y se escala correctamente (cover/contain según prefieras el corte) */}
        <img 
          src="/extras.svg" 
          alt="HUD Interface" 
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        />
      </div>
    );
    export default ExtrasOverlay;