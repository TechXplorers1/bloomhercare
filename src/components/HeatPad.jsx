import React from 'react';
import { Sun, Clock, Zap, MapPin } from 'lucide-react';

const HeatPad = () => {
  const steps = [
    { num: '1', title: 'Open', desc: 'Remove patch from the wrapper.' },
    { num: '2', title: 'Peel', desc: 'Remove the paper backing.' },
    { num: '3', title: 'Stick', desc: 'Apply to clothing over the targeted area.' }
  ];

  return (
    <section className="section bg-white">
      <div className="container grid grid-cols-2 items-center gap-6">
        <div className="visual-placeholder" style={{
          height: '400px',
          backgroundColor: 'var(--mint-accent)',
          borderRadius: 'var(--border-radius)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '200px',
            height: '100px',
            background: 'var(--white)',
            borderRadius: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 'var(--shadow-md)',
            color: 'var(--primary-purple)',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            zIndex: 2
          }}>
            BloomWarm Patch
          </div>
          <div className="animate-float" style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
            zIndex: 1
          }}></div>
        </div>

        <div className="heatpad-content">
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Soothing Warmth <br/> <span style={{ color: 'var(--mint-accent)', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>When You Need It Most</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '2rem' }}>
            Targeted cramp relief that goes where you go. School-friendly, discrete, and lasts all day.
          </p>

          <div className="grid grid-cols-2 gap-2" style={{ marginBottom: '2rem' }}>
            <div className="flex items-center gap-1"><Sun color="var(--primary-purple)" /> Air-activated</div>
            <div className="flex items-center gap-1"><Clock color="var(--primary-purple)" /> Up to 8 hours</div>
            <div className="flex items-center gap-1"><MapPin color="var(--primary-purple)" /> Targeted relief</div>
            <div className="flex items-center gap-1"><Zap color="var(--primary-purple)" /> Fast acting</div>
          </div>

          <div style={{ background: 'var(--cream-white)', padding: '1.5rem', borderRadius: 'var(--border-radius-sm)' }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--primary-purple)' }}>Simple 3-Step Guide</h4>
            <div className="flex gap-2 justify-between">
              {steps.map((step, idx) => (
                <div key={idx} style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'var(--white)', color: 'var(--primary-purple)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 0.5rem', fontWeight: 'bold', boxShadow: 'var(--shadow-sm)'
                  }}>
                    {step.num}
                  </div>
                  <h5 style={{ marginBottom: '0.25rem' }}>{step.title}</h5>
                  <p style={{ fontSize: '0.875rem', color: '#666' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeatPad;
