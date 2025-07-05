"use client"
import { createClient } from '@/lib/supabase/client';

export default  function Instruments() {

const insertar = async ()=>{
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('instruments')
    .insert([
      { producto: 'uno',
        descripción:'cuerdas',
        precio:500},
        { producto: 'dos',
        descripción:'teclas',
        precio:600},
        { producto: 'tres',
        descripción:'musica',
        precio:700},
        { producto: 'cuatro',
        descripción:'sonido',
        precio:800}
      ])
        .select()
      }

    
  const eliminar = async ()=>{
  const supabase = await createClient();
  const { data, error } = await supabase  
  .from('instruments')
  .delete()
  .eq('id', 26 )


  return (
    <>
    <button onClick={insertar}>boton de insertar dato</button>
     </>
  )

  }
}