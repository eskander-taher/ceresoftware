//example
export const translateServices = (i18n, root_services) => {
  return root_services.map((service) => {
    if (i18n.language === "ar") {
      return {
        name: service.name_ar,
        description: service.description_ar,
        icon: service.icon,
      };
    } else if (i18n.language === "ru") {
      return {
        name: service.name_ru,
        description: service.description_ru,
        icon: service.icon,
      };
    } else {
      return { ...service };
    }
  });
};
