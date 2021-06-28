import os
from unittest.mock import ANY
from unittest.mock import patch, MagicMock

from codegen.cli_import import correspondance_table

output_dir = './tests/outputs'


@patch("codegen.cli_import.write")
def test_correspondance_table(mock_write: MagicMock):
    """Test that command `poetry run import correspondance_table` write a file"""
    correspondance_table(output_dir=output_dir)
    mock_write.assert_any_call(os.path.join(output_dir, 'correspondance_table.json'), ANY)
