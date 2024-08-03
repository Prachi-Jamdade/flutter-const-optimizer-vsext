import { optimizeDartCode } from './optimize_code';
import { showOptimizationSuccess, showOptimizationFailure, showNoOptimizationNeeded } from './notifications';

export async function handleOptimizeCode(): Promise<void> {
    const success = await optimizeDartCode();

    if (success === 'optimized') {
        showOptimizationSuccess();
    } else if (success === 'no_optimization_needed') {
        showNoOptimizationNeeded();
    } else {
        showOptimizationFailure();
    }
}
