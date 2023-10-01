export function getTotalTime({
  preparationTime = 0,
  cookingTime = 0,
}: {
  preparationTime: number;
  cookingTime?: number;
}) {
  return preparationTime + cookingTime;
}
