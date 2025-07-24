import React, { useState } from 'react';

const DatasetTrigger = () => {
  // State to track if dataset trigger is enabled
  const [enabled, setEnabled] = useState(false);

  // State to hold dataset fields
  const [dataset, setDataset] = useState({
    name: '',
    type: '',
    frequency: ''
  });

  // Handle input changes in dataset fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataset({ ...dataset, [name]: value });
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Dataset Trigger</h3>

      <label>
        <input
          type="checkbox"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        />
        Enable Dataset Trigger
      </label>

      <div>
        <input
          type="text"
          name="name"
          value={dataset.name}
          onChange={handleChange}
          placeholder="Dataset Name"
          disabled={!enabled}
          style={{ width: '100%', marginTop: '5px' }}
        />
      </div>

      <div>
        <input
          type="text"
          name="type"
          value={dataset.type}
          onChange={handleChange}
          placeholder="Dataset Type"
          disabled={!enabled}
          style={{ width: '100%', marginTop: '5px' }}
        />
      </div>

      {/* Show frequency input only if enabled */}
      {enabled && (
        <div>
          <input
            type="text"
            name="frequency"
            value={dataset.frequency}
            onChange={handleChange}
            placeholder="Dataset Frequency"
            style={{ width: '100%', marginTop: '5px' }}
          />
        </div>
      )}

      {/* Buttons to add Predecessor Job and VRM */}
      <div style={{ marginTop: '10px' }}>
        <button type="button" style={{ marginRight: '10px' }}>
          + Add Predecessor Job
        </button>
        <button type="button">+ Add VRM (Exclusive)</button>
      </div>
    </div>
  );
};

export default DatasetTrigger;
