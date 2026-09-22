import pytest

from effect.naming import (
    error_class_name,
    operation_binding,
    operation_prefix,
    status_tag,
    stream_name,
)


@pytest.mark.parametrize(
    ("name", "expected"),
    [("list", "list"), ("delete", "delete_"), ("get_activation", "getActivation")],
)
def test_operation_binding(name: str, expected: str) -> None:
    assert operation_binding(name) == expected


def test_stream_name() -> None:
    assert stream_name("list_members") == "listMembersStream"


def test_operation_prefix() -> None:
    assert operation_prefix(["CustomerPortal", "Subscriptions"], "update") == (
        "CustomerPortalSubscriptionsUpdate"
    )


@pytest.mark.parametrize(
    ("tag", "expected"),
    [
        ("ResourceNotFound", "ProductsGetResourceNotFoundError"),
        ("HTTPValidationError", "ProductsGetHTTPValidationError"),
    ],
)
def test_error_class_name(tag: str, expected: str) -> None:
    assert error_class_name("ProductsGet", tag) == expected


def test_status_tag() -> None:
    assert status_tag(404) == "NotFound"
    assert status_tag(418) == "Status418"
