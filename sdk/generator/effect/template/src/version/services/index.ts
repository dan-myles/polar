{% for service in services %}
export * as {{ service.name }} from "./{{ service.name | snake }}{% if service.services %}/index{% endif %}";
{% endfor %}
