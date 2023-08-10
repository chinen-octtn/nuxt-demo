export const usePathName = () => {
  const route = useRoute();

  return `${route.fullPath}`;
};
