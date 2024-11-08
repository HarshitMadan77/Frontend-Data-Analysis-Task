// Importing raw agricultural data from a JSON file.
import rawCropData from '../assets/Manufac _ India Agro Dataset.json';

// Defining the structure of crop data.
export type CropData = {
    country: string;
    year: number;
    crop: string;
    production: number;
    yield: number;
    area: number;
};

// Helper function to extract a four-digit year from a string.
const parseYear = (yearString: string): number => {
    const yearMatch = yearString.match(/\d{4}/);
    return yearMatch ? parseInt(yearMatch[0]) : 0;
};

// Converting raw data to standardized CropData format.
const cropDataArray: CropData[] = (rawCropData as any[]).map((item) => ({
    country: item.Country,
    year: parseYear(item.Year),
    crop: item["Crop Name"],
    production: item["Crop Production (UOM:t(Tonnes))"],
    yield: item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"],
    area: item["Area Under Cultivation (UOM:Ha(Hectares))"],
}));

// Analyzing yearly crop production, finding max and min production per year.
export function getYearlyProductionAnalysis() {
    const years = Array.from(new Set(cropDataArray.map((item) => item.year)));
    return years.map((year) => {
        const cropsOfYear = cropDataArray.filter((item) => item.year === year);
        const maxCrop = cropsOfYear.reduce(
            (max, crop) => (crop.production > max.production ? crop : max),
            cropsOfYear[0]
        );
        const minCrop = cropsOfYear.reduce(
            (min, crop) => (crop.production < min.production ? crop : min),
            cropsOfYear[0]
        );
        return { year, maxCrop: maxCrop.crop, minCrop: minCrop.crop };
    });
}

// Calculating average yield and area for each crop.
export function getAverageCropStatistics() {
    const crops = Array.from(new Set(cropDataArray.map((item) => item.crop)));
    return crops.map((crop) => {
        const cropEntries = cropDataArray.filter((item) => item.crop === crop);
        const avgYield = cropEntries.reduce((sum, item) => sum + item.yield, 0) / cropEntries.length;
        const avgArea = cropEntries.reduce((sum, item) => sum + item.area, 0) / cropEntries.length;
        return {
            crop,
            avgYield: parseFloat(avgYield.toFixed(3)),
            avgArea: parseFloat(avgArea.toFixed(3)),
        };
    });
}

export default cropDataArray;