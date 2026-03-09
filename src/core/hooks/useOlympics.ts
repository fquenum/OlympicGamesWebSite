import { useState, useEffect } from 'react';
import type { Olympic } from '../models/Olympic';

interface OlympicsState {
  olympics: Olympic[];
  loading: boolean;
  error: string | null;
}

const useOlympics = () => {
  const [state, setState] = useState<OlympicsState>({
    olympics: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch('/assets/mock/olympic.json')
      .then((response) => {
        if (!response.ok) throw new Error('Erreur lors du chargement des données');
        return response.json();
      })
      .then((data: Olympic[]) => {
        setState({ olympics: data, loading: false, error: null });
      })
      .catch((err) => {
        setState({ olympics: [], loading: false, error: err.message });
      });
  }, []); // [] = s'exécute une seule fois au montage, comme ngOnInit

  return state;
};

export default useOlympics;