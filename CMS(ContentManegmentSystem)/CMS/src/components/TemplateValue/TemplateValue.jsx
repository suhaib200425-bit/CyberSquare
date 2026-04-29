import React from 'react'

function TemplateValue({ target, label, type, value, refKey, setPageSections }) {
  const handlechange = (e) => {
    console.log(refKey);
    setPageSections(prev => {
      const updated = { ...prev };
      updated.sections.map((elem, i) => {
        
        if (i === target.index) {
          console.log(target);
          console.log(elem);
          
          return target.values[refKey].value = e.target.value;
        }
        return elem
      })
      return updated;
    });
  }
  return (
    <div className="p-[5px] rounded-[5px] bg-[var(--hover-color)]">
      <label className="text-[13px] m-0 p-0">{label}</label>

      {
        type == 'textarea' &&
        <textarea onChange={handlechange} className='bg-white px-[10px] py-[5px] rounded-[5px]' name="Description" id="" cols="22" rows={5}
          name={refKey} value={value}></textarea>
      }{
        (type == 'text' || type == 'color') && <input
          type={type}
          name={refKey}
          value={value}
          onChange={handlechange}
          className="bg-white px-[10px] py-[5px] rounded-[5px]"
        />
      }
      {
        type == 'select' &&
        <select class="border p-2 rounded" 
          name={refKey} 
          onChange={handlechange}
          value={value}>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      }
    </div>
  )
}

export default TemplateValue