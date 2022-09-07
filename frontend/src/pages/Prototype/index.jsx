import { Context } from "../../context/Context.jsx";
import { useContext } from "react";
import * as S from "./style";

function Prototype() {
  let { navigate } = useContext(Context);

  /* const quill = new Quill('#textBox', {
    modules: { toolbar: false },
    theme: 'bubble'
    });

    quill.on('text-change', update);
    quill.on('text-change', change);
    quill.on('editor-change', editor);

    function update(delta) {
        //const contents = quill.getContents();
        console.log('contents', delta);
    }

    function change(delta, oldDelta, source) {
        console.log('contents', delta);
        console.log('old contents', oldDelta);
        console.log('source', source);
        if (source == 'api') {
            console.log("An API call triggered this change.");
        } else if (source == 'user') {
            console.log("A user action triggered this change.");
        }
    }

    function editor(eventName, ...args) {
        console.log('eventName', eventName);
        if (eventName === 'text-change') {
        // args[0] will be delta
        } else if (eventName === 'selection-change') {
        // args[0] will be old range
        }
    } */

  return (
    <>
      <S.h1>Teste WebSocket</S.h1>
      <S.section>
        <div id="textBox"></div>
        <div id="viewBox"></div>
      </S.section>
    </>
  );
}

export default Prototype;
