// Windows Sound Effects Generator
class WindowsSounds {
    constructor() {
        this.audioContext = null;
        this.soundsEnabled = false;
        this.initAudio();
    }

    initAudio() {
        try {
            // Create audio context (will be resumed on user interaction)
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.soundsEnabled = true;
        } catch (e) {
            console.log('Web Audio API not supported');
            this.soundsEnabled = false;
        }
    }

    // Resume audio context (needed for autoplay policy)
    resumeAudio() {
        if (this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    }

    // Generate Windows 98 startup sound
    playStartupSound() {
        if (!this.soundsEnabled) return;
        
        this.resumeAudio();
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // Windows 98 startup sound frequencies
        const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        const durations = [0.3, 0.3, 0.3, 0.6];
        
        let currentTime = this.audioContext.currentTime;
        
        frequencies.forEach((freq, index) => {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            
            osc.connect(gain);
            gain.connect(this.audioContext.destination);
            
            osc.frequency.setValueAtTime(freq, currentTime);
            osc.type = 'sine';
            
            gain.gain.setValueAtTime(0.3, currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, currentTime + durations[index]);
            
            osc.start(currentTime);
            osc.stop(currentTime + durations[index]);
            
            currentTime += durations[index] + 0.1;
        });
    }

    // Generate click sound
    playClickSound() {
        if (!this.soundsEnabled) return;
        
        this.resumeAudio();
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.1);
    }

    // Generate file open sound
    playFileOpenSound() {
        if (!this.soundsEnabled) return;
        
        this.resumeAudio();
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // File open sound - ascending notes
        const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5
        const durations = [0.15, 0.15, 0.3];
        
        let currentTime = this.audioContext.currentTime;
        
        frequencies.forEach((freq, index) => {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            
            osc.connect(gain);
            gain.connect(this.audioContext.destination);
            
            osc.frequency.setValueAtTime(freq, currentTime);
            osc.type = 'sine';
            
            gain.gain.setValueAtTime(0.25, currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, currentTime + durations[index]);
            
            osc.start(currentTime);
            osc.stop(currentTime + durations[index]);
            
            currentTime += durations[index] + 0.05;
        });
    }

    // Generate error sound
    playErrorSound() {
        if (!this.soundsEnabled) return;
        
        this.resumeAudio();
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
        oscillator.type = 'sawtooth';
        
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.5);
    }

    // Generate modal open sound
    playModalOpenSound() {
        if (!this.soundsEnabled) return;
        
        this.resumeAudio();
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.2);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.2);
    }

    // Generate modal close sound
    playModalCloseSound() {
        if (!this.soundsEnabled) return;
        
        this.resumeAudio();
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(600, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 0.15);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.15);
    }
}

// Create global instance
window.windowsSounds = new WindowsSounds(); 